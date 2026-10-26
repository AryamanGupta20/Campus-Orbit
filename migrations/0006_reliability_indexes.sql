-- Index frequent report, account, and privacy lookups without changing records.
CREATE INDEX IF NOT EXISTS messages_request_created ON messages(request_id,created_at);
CREATE INDEX IF NOT EXISTS attachments_request ON attachments(request_id);
CREATE INDEX IF NOT EXISTS requests_created ON requests(created_at DESC);
CREATE INDEX IF NOT EXISTS sessions_expiry ON sessions(expires_at);
CREATE INDEX IF NOT EXISTS users_created ON users(created_at DESC);
CREATE INDEX IF NOT EXISTS community_blocks_target ON community_blocks(target_id,user_id);
