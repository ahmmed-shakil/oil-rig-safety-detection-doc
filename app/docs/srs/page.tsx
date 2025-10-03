import Link from "next/link";

export const metadata = {
  title: "SRS - Oil Rig Safety Detection System",
};

export default function SrsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Software Requirements Specification (SRS)
        </h1>
        <p className="text-slate-400 mb-6">
          Project: Oil Rig Safety Object Detection System (MVP) — Version 1.0
        </p>

        <section className="mb-6 bg-slate-800/40 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Purpose & Scope</h2>
          <pre className="whitespace-pre-wrap text-sm text-slate-200">{`The purpose of this system is to enhance safety monitoring on offshore oil rigs using existing CCTV infrastructure. The system detects people, vessels, helicopters, and safety equipment (e.g., helmets), validates compliance with defined safety zones (danger zones, smoking zones, helipad, berthing areas), and generates timestamped events with snapshots for auditing and alerts.

This MVP focuses on:
- Real-time detection of persons, vessels, helicopters.
- Helmet compliance detection.
- Zone compliance (via pre-defined polygons). (Vessels, Smoking)
- Event logging and visualization on a dashboard.
- Alerts for violations.
`}</pre>
        </section>

        <section className="mb-6 bg-slate-800/40 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">
            System Features (Summary)
          </h2>
          <pre className="whitespace-pre-wrap text-sm text-slate-200">{`Detection: Identify persons, vessels, helicopters, helmets.
Tracking: Maintain object identities across frames.
Zone Compliance: Verify if detected objects are within defined zones.
Event Generation: Log violations and significant events.
Storage: Maintain structured event logs + associated media.
Visualization: Web dashboard with live CCTV overlays and event timeline.
Alerts: Notify operators of critical violations.
`}</pre>
        </section>

        <section className="mb-6 bg-slate-800/40 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">
            Database Schema (sample)
          </h2>
          <p className="text-slate-300 text-sm mb-2">
            The full SQL schema is available here:
          </p>
          <Link href="/sql/schema.sql" className="text-cyan-300 underline">
            Download SQL schema (schema.sql)
          </Link>
        </section>

        <section className="mb-6 bg-slate-800/40 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">API Contract (summary)</h2>
          <p className="text-slate-300 text-sm mb-2">
            See the full API contract in the repository:{" "}
            <code className="text-sm text-cyan-300">/docs/api.md</code>
          </p>
          <p className="text-slate-400 text-sm">Key endpoints:</p>
          <ul className="list-disc ml-6 text-sm text-slate-300">
            <li>
              GET /api/events — List events (filters: camera, type, time-range)
            </li>
            <li>POST /api/events — Ingest an event (used by edge/back-end)</li>
            <li>GET /api/zones — List zones for a camera</li>
            <li>
              POST /api/zones — Create/update zone (polygon_img stored as JSON)
            </li>
            <li>WebSocket /ws/events — Real-time event stream</li>
          </ul>
        </section>

        <section className="mb-6 bg-slate-800/40 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">
            Acceptance criteria for walkthrough
          </h2>
          <ol className="list-decimal ml-6 text-sm text-slate-300">
            <li>
              Documentation page (this page) mirrors the SRS and links the DB
              schema and API contract.
            </li>
            <li>
              Event JSON sample and snapshot links included in the API docs.
            </li>
            <li>
              Zone polygon format matches <code>zones.polygon_img</code> JSON
              structure in schema.
            </li>
            <li>
              Demo mode: frontend can operate with a mock API/WebSocket to
              demonstrate flows without edge hardware.
            </li>
          </ol>
        </section>

        <div className="flex gap-4">
          <Link href="/" className="px-4 py-2 bg-slate-700 rounded text-sm">
            Back to Flow
          </Link>
          <Link
            href="/docs/api.md"
            className="px-4 py-2 bg-cyan-600 rounded text-sm"
          >
            Open API Contract
          </Link>
        </div>
      </div>
    </div>
  );
}
