-- Sample partial DB schema for Oil Rig Safety Detection System (provided by user)
-- Run this in PostgreSQL with pgcrypto extension for gen_random_uuid()

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE rigs (
  rig_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  operator      TEXT,
  gps_lat       DOUBLE PRECISION,
  gps_lon       DOUBLE PRECISION,
  timezone      TEXT,
  metadata      JSONB,
  created_at    TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE cameras (
  camera_id     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rig_id        UUID REFERENCES rigs(rig_id),
  name          TEXT,
  location_desc TEXT,
  rtsp_url      TEXT,
  orientation   JSONB,
  resolution_w  INT,
  resolution_h  INT,
  intrinsics    JSONB,
  extrinsics    JSONB,
  created_at    TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE zones (
  zone_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  camera_id     UUID REFERENCES cameras(camera_id),
  name          TEXT,
  type          TEXT,
  polygon_geom  geometry(POLYGON, 4326),
  polygon_img   JSONB,
  policy        JSONB,
  created_at    TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_zones_camera ON zones(camera_id);

-- truncated for brevity; use the full schema from project SRS when ready
