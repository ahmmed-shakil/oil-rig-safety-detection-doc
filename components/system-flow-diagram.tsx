"use client"

import { useState } from "react"
import { Monitor, Database, AlertTriangle, Camera, Users, FileText, Bell, Shield, Box } from "lucide-react"

const SystemFlowDiagram = () => {
  const [activeTab, setActiveTab] = useState("flow")
  const [expandedSections, setExpandedSections] = useState({
    pages: true,
    components: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const pages = [
    {
      name: "Login / Authentication",
      route: "/login",
      components: ["LoginForm", "ForgotPassword", "RoleBasedRedirect"],
      description: "Secure authentication with role-based access",
    },
    {
      name: "Dashboard (Home)",
      route: "/dashboard",
      components: ["LiveFeedGrid", "EventSummaryCards", "AlertPanel", "SystemHealthWidget", "QuickStats"],
      description: "Main monitoring interface with live feeds and real-time alerts",
    },
    {
      name: "Live Monitoring",
      route: "/monitoring",
      components: [
        "VideoPlayer",
        "BoundingBoxOverlay",
        "ZoneOverlay",
        "CameraSelector",
        "DetectionPanel",
        "TrackingInfo",
      ],
      description: "Real-time CCTV feeds with detection overlays",
    },
    {
      name: "Events & Alerts",
      route: "/events",
      components: ["EventTimeline", "EventFilters", "EventCard", "EventDetails", "SnapshotViewer", "AcknowledgeButton"],
      description: "Historical event logs and alert management",
    },
    {
      name: "Zone Management",
      route: "/zones",
      components: ["CameraView", "PolygonDrawer", "ZoneList", "ZoneForm", "PolicyEditor"],
      description: "Configure safety zones and compliance rules",
    },
    {
      name: "Camera Configuration",
      route: "/cameras",
      components: ["CameraList", "CameraForm", "RTSPTester", "CameraPreview", "RigSelector"],
      description: "Manage camera connections and settings",
    },
    {
      name: "Analytics & Reports",
      route: "/analytics",
      components: ["ComplianceChart", "ViolationTrends", "HeatmapViewer", "ReportGenerator", "DateRangePicker"],
      description: "Compliance metrics and historical analysis",
    },
    {
      name: "User Management",
      route: "/users",
      components: ["UserList", "UserForm", "RoleManager", "PermissionMatrix"],
      description: "Admin panel for user and role management",
    },
    {
      name: "System Settings",
      route: "/settings",
      components: ["AlertConfiguration", "ModelVersionSelector", "ThresholdSettings", "NotificationChannels"],
      description: "System-wide configuration and preferences",
    },
    {
      name: "Audit Logs",
      route: "/audit",
      components: ["AuditTable", "AuditFilters", "ActionTimeline"],
      description: "System activity and user action logs",
    },
  ]

  const sharedComponents = [
    { name: "Navbar", usage: "Navigation with role-based menu items" },
    { name: "Sidebar", usage: "Main navigation menu" },
    { name: "NotificationBell", usage: "Real-time alert notifications" },
    { name: "UserProfile", usage: "User info and logout" },
    { name: "LoadingSpinner", usage: "Loading states" },
    { name: "ErrorBoundary", usage: "Error handling" },
    { name: "Modal", usage: "Dialogs and popups" },
    { name: "Toast", usage: "Success/error messages" },
    { name: "ConfirmDialog", usage: "Confirmation prompts" },
    { name: "DateTimePicker", usage: "Date/time selection" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Oil Rig Safety Detection System
          </h1>
          <p className="text-slate-400">Complete Application Flow & Architecture</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 border-b border-slate-700">
          {["flow", "pages", "components"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all ${
                activeTab === tab ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* System Flow */}
        {activeTab === "flow" && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Box className="text-cyan-400" />
                Data Flow Architecture
              </h2>

              <div className="space-y-6">
                {/* Edge Layer */}
                <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">1. Edge Processing Layer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Camera className="text-green-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">RTSP Streams</h4>
                      <p className="text-sm text-slate-400">Existing CCTV feeds from multiple cameras on the rig</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Monitor className="text-green-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Detection Engine</h4>
                      <p className="text-sm text-slate-400">
                        YOLOv8/v9 models for person, helmet, vessel, helicopter detection
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Shield className="text-green-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Tracking System</h4>
                      <p className="text-sm text-slate-400">ByteTrack for object tracking across frames</p>
                    </div>
                  </div>
                </div>

                {/* Processing Layer */}
                <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">2. Processing & Rules Engine</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Box className="text-blue-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Zone Compliance</h4>
                      <p className="text-sm text-slate-400">Check object centroids against polygon zones</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <AlertTriangle className="text-blue-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Event Generator</h4>
                      <p className="text-sm text-slate-400">
                        Create structured events for violations and significant occurrences
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Database className="text-blue-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Event Broker</h4>
                      <p className="text-sm text-slate-400">Kafka/MQTT for real-time event streaming</p>
                    </div>
                  </div>
                </div>

                {/* Storage Layer */}
                <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">3. Storage Layer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Database className="text-purple-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">PostgreSQL (TimescaleDB)</h4>
                      <p className="text-sm text-slate-400">Time-series data: detections, tracks, events</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Box className="text-purple-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">MinIO/S3</h4>
                      <p className="text-sm text-slate-400">Object storage for snapshots and video clips</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <FileText className="text-purple-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Event Logs</h4>
                      <p className="text-sm text-slate-400">Structured JSON events with media references</p>
                    </div>
                  </div>
                </div>

                {/* Application Layer */}
                <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-cyan-500">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">4. Application Layer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Monitor className="text-cyan-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Backend API</h4>
                      <p className="text-sm text-slate-400">
                        FastAPI with REST endpoints & WebSocket for real-time updates
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Users className="text-cyan-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">React Dashboard</h4>
                      <p className="text-sm text-slate-400">Web-based monitoring and management interface</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Bell className="text-cyan-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Alert System</h4>
                      <p className="text-sm text-slate-400">Email/SMS/In-app notifications for violations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Event Types */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">Key Event Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { type: "person_no_helmet", severity: "high", desc: "Person detected without helmet in safety zone" },
                  { type: "zone_violation", severity: "critical", desc: "Person/object in restricted danger zone" },
                  {
                    type: "smoking_zone_violation",
                    severity: "high",
                    desc: "Smoking detected outside designated area",
                  },
                  { type: "vessel_unauthorized", severity: "medium", desc: "Vessel in restricted berthing area" },
                  { type: "helicopter_landing", severity: "low", desc: "Helicopter detected on helipad" },
                  { type: "loitering_detected", severity: "medium", desc: "Person/vessel stationary beyond threshold" },
                ].map((event, idx) => (
                  <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm text-cyan-400">{event.type}</code>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          event.severity === "critical"
                            ? "bg-red-500/20 text-red-400"
                            : event.severity === "high"
                              ? "bg-orange-500/20 text-orange-400"
                              : event.severity === "medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {event.severity}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pages View */}
        {activeTab === "pages" && (
          <div className="space-y-4">
            {pages.map((page, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{page.name}</h3>
                    <code className="text-sm text-slate-400">{page.route}</code>
                  </div>
                  <Monitor className="text-slate-600" size={24} />
                </div>
                <p className="text-slate-300 mb-4">{page.description}</p>
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Components:</h4>
                  <div className="flex flex-wrap gap-2">
                    {page.components.map((comp, cidx) => (
                      <span
                        key={cidx}
                        className="px-3 py-1 bg-slate-900/50 rounded-full text-sm text-cyan-300 border border-slate-700"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Components View */}
        {activeTab === "components" && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Box className="text-cyan-400" />
                Shared Components
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sharedComponents.map((comp, idx) => (
                  <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-cyan-400 mb-1">{comp.name}</h4>
                    <p className="text-sm text-slate-400">{comp.usage}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">Component Hierarchy Example</h2>
              <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400">App</div>
                <div className="ml-4 text-slate-400">├── AuthProvider</div>
                <div className="ml-4 text-slate-400">├── Router</div>
                <div className="ml-8 text-cyan-400">├── Layout</div>
                <div className="ml-12 text-slate-400">│ ├── Navbar</div>
                <div className="ml-12 text-slate-400">│ ├── Sidebar</div>
                <div className="ml-12 text-slate-400">│ └── NotificationBell</div>
                <div className="ml-8 text-cyan-400">├── Dashboard</div>
                <div className="ml-12 text-slate-400">│ ├── LiveFeedGrid</div>
                <div className="ml-12 text-slate-400">│ ├── EventSummaryCards</div>
                <div className="ml-12 text-slate-400">│ └── AlertPanel</div>
                <div className="ml-8 text-cyan-400">├── Monitoring</div>
                <div className="ml-12 text-slate-400">│ ├── VideoPlayer</div>
                <div className="ml-12 text-slate-400">│ ├── BoundingBoxOverlay</div>
                <div className="ml-12 text-slate-400">│ └── ZoneOverlay</div>
                <div className="ml-8 text-cyan-400">└── Events</div>
                <div className="ml-12 text-slate-400"> ├── EventTimeline</div>
                <div className="ml-12 text-slate-400"> ├── EventFilters</div>
                <div className="ml-12 text-slate-400"> └── EventDetails</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SystemFlowDiagram
