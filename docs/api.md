# API Contract — Oil Rig Safety Detection System

This file summarizes the REST and WebSocket endpoints used by the frontend and edge/back-end. It is meant as a minimal contract for demos and initial implementation.

## REST endpoints

- GET /api/events

  - Query params: camera_id, event_type, start_ts, end_ts, limit, offset
  - Response: { events: Event[] }

- POST /api/events

  - Body: Event (see sample below)
  - Response: { success: true, event_id }

- GET /api/zones?camera_id=

  - Response: { zones: Zone[] }

- POST /api/zones
  - Body: Zone (polygon_img stored as JSON array of [x,y] pairs)

## WebSocket

- ws://<host>/ws/events
  - Real-time push of Event messages in the same Event JSON format.

## Sample Event JSON

```json
{
  "event_type": "person_no_helmet",
  "timestamp": "2025-09-17T13:02:11+05:30",
  "camera_id": "cctv_deck_a1",
  "object_class": "person",
  "bbox": [432, 180, 512, 340],
  "confidence": 0.91,
  "tracker_id": "track_12",
  "zone_id": "deck_danger",
  "zone_type": "danger",
  "violation_reason": "no_helmet_in_danger_zone",
  "snapshot_url": "https://rigstorage/events/20250917_130211.jpg"
}
```

## Notes

- For a demo/walkthrough, the frontend can operate with a mock REST server and a WebSocket mock to simulate real-time events.
- Zone polygon format: `zones.polygon_img` should be JSON array of [[x,y],...] in image coordinates. Server-side geocalibration is optional and out-of-scope for the MVP.
