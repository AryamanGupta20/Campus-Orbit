PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS users (
 id TEXT PRIMARY KEY, email TEXT NOT NULL UNIQUE, name TEXT NOT NULL,
 password_hash TEXT NOT NULL, salt TEXT NOT NULL, recovery_hash TEXT NOT NULL,
 role TEXT NOT NULL DEFAULT 'student' CHECK(role IN ('student','admin')),
 created_at TEXT NOT NULL, last_login TEXT, login_count INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, expires_at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);
CREATE TABLE IF NOT EXISTS user_data (user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE, data TEXT NOT NULL DEFAULT '{}', version INTEGER NOT NULL DEFAULT 0, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS login_events (id TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,created_at TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS login_events_user ON login_events(user_id,created_at);
CREATE TABLE IF NOT EXISTS requests (id TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,category TEXT NOT NULL,description TEXT NOT NULL,timing TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'New' CHECK(status IN ('New','In progress','Resolved')),created_at TEXT NOT NULL,updated_at TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS requests_user ON requests(user_id,created_at);
CREATE TABLE IF NOT EXISTS messages(id TEXT PRIMARY KEY,request_id TEXT NOT NULL REFERENCES requests(id) ON DELETE CASCADE,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,body TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS attachments(id TEXT PRIMARY KEY,request_id TEXT NOT NULL REFERENCES requests(id) ON DELETE CASCADE,name TEXT NOT NULL,size INTEGER NOT NULL,mime TEXT NOT NULL,object_key TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS content(id TEXT PRIMARY KEY,kind TEXT NOT NULL,data TEXT NOT NULL,updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS settings(id TEXT PRIMARY KEY,data TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS shared_portfolios(token TEXT PRIMARY KEY,user_id TEXT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS rate_limits(key TEXT PRIMARY KEY,count INTEGER NOT NULL,expires_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS community_profiles(user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,data TEXT NOT NULL,updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS community_posts(id TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,data TEXT NOT NULL,created_at TEXT NOT NULL,deleted INTEGER NOT NULL DEFAULT 0);
CREATE INDEX IF NOT EXISTS community_posts_feed ON community_posts(deleted,created_at DESC);
CREATE TABLE IF NOT EXISTS community_replies(id TEXT PRIMARY KEY,post_id TEXT NOT NULL REFERENCES community_posts(id),user_id TEXT NOT NULL REFERENCES users(id),body TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS community_replies_post ON community_replies(post_id,created_at);
CREATE TABLE IF NOT EXISTS community_likes(post_id TEXT NOT NULL REFERENCES community_posts(id),user_id TEXT NOT NULL REFERENCES users(id),PRIMARY KEY(post_id,user_id));
CREATE TABLE IF NOT EXISTS community_follows(user_id TEXT NOT NULL REFERENCES users(id),target_id TEXT NOT NULL REFERENCES users(id),PRIMARY KEY(user_id,target_id));
CREATE TABLE IF NOT EXISTS community_connections(a TEXT NOT NULL REFERENCES users(id),b TEXT NOT NULL REFERENCES users(id),sender TEXT NOT NULL,status TEXT NOT NULL CHECK(status IN ('pending','accepted')),PRIMARY KEY(a,b));
CREATE TABLE IF NOT EXISTS community_blocks(user_id TEXT NOT NULL REFERENCES users(id),target_id TEXT NOT NULL REFERENCES users(id),PRIMARY KEY(user_id,target_id));
CREATE TABLE IF NOT EXISTS community_dms(id TEXT PRIMARY KEY,sender TEXT NOT NULL REFERENCES users(id),recipient TEXT NOT NULL REFERENCES users(id),body TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS community_dm_pair ON community_dms(sender,recipient,created_at);
CREATE TABLE IF NOT EXISTS community_alerts(id TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id),body TEXT NOT NULL,created_at TEXT NOT NULL,seen INTEGER NOT NULL DEFAULT 0);
CREATE INDEX IF NOT EXISTS community_alerts_user ON community_alerts(user_id,created_at);
CREATE TABLE IF NOT EXISTS community_preferences(user_id TEXT PRIMARY KEY REFERENCES users(id),alerts INTEGER NOT NULL DEFAULT 1);
CREATE TABLE IF NOT EXISTS account_suspensions(user_id TEXT PRIMARY KEY REFERENCES users(id),reason TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS chat_consents(user_id TEXT PRIMARY KEY REFERENCES users(id),version TEXT NOT NULL,accepted_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS moderated_messages(message_id TEXT PRIMARY KEY REFERENCES community_dms(id));
CREATE TABLE IF NOT EXISTS admin_audit(id TEXT PRIMARY KEY,admin_id TEXT NOT NULL,action TEXT NOT NULL,details TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS site_versions(id TEXT PRIMARY KEY,data TEXT NOT NULL,created_at TEXT NOT NULL,admin_id TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS site_submissions(id TEXT PRIMARY KEY,user_id TEXT NOT NULL,block_id TEXT NOT NULL,body TEXT NOT NULL,created_at TEXT NOT NULL);
