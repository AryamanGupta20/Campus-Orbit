CREATE INDEX IF NOT EXISTS community_follows_target ON community_follows(target_id);
CREATE INDEX IF NOT EXISTS community_connections_a_status ON community_connections(a,status);
CREATE INDEX IF NOT EXISTS community_connections_b_status ON community_connections(b,status);
