"use client";

import React, { useState } from "react";
import {
  Monitor,
  Database,
  AlertTriangle,
  Camera,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  Shield,
  Box,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const SystemFlowDiagram = () => {
  const [activeTab, setActiveTab] = useState("flow");
  const [expandedSections, setExpandedSections] = useState({
    pages: true,
    components: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const pages = [
    {
      name: "Login / Authentication",
      route: "/login",
      components: ["LoginForm", "ForgotPassword", "RoleBasedRedirect"],
      description: "Secure authentication with role-based access",
      dbTables: ["users", "roles", "permissions"],
    },
    {
      name: "Dashboard (Home)",
      route: "/dashboard",
      components: [
        "LiveFeedGrid",
        "EventSummaryCards",
        "AlertPanel",
        "SystemHealthWidget",
        "QuickStats",
        "RigSelector",
      ],
      description:
        "Main monitoring interface with live feeds and real-time alerts",
      dbTables: ["rigs", "cameras", "events", "alerts", "system_metrics"],
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
        "HelmetIndicator",
      ],
      description: "Real-time CCTV feeds with detection overlays",
      dbTables: ["cameras", "detections", "tracks", "track_points", "zones"],
    },
    {
      name: "Events & Alerts",
      route: "/events",
      components: [
        "EventTimeline",
        "EventFilters",
        "EventCard",
        "EventDetails",
        "SnapshotViewer",
        "AcknowledgeButton",
        "MediaGallery",
      ],
      description: "Historical event logs and alert management",
      dbTables: ["events", "media_objects", "tracks", "alerts"],
    },
    {
      name: "Zone Management",
      route: "/zones",
      components: [
        "CameraView",
        "PolygonDrawer",
        "ZoneList",
        "ZoneForm",
        "PolicyEditor",
        "ZoneTypeSelector",
      ],
      description:
        "Configure safety zones (danger, smoking, helipad, berth, safe) and compliance rules",
      dbTables: ["zones", "cameras"],
    },
    {
      name: "Camera Configuration",
      route: "/cameras",
      components: [
        "CameraList",
        "CameraForm",
        "RTSPTester",
        "CameraPreview",
        "RigSelector",
        "ResolutionSettings",
        "OrientationConfig",
      ],
      description:
        "Manage camera connections, RTSP streams, and calibration settings",
      dbTables: ["cameras", "rigs"],
    },
    {
      name: "Rig Management",
      route: "/rigs",
      components: [
        "RigList",
        "RigForm",
        "GPSMap",
        "TimezoneSelector",
        "MetadataEditor",
      ],
      description: "Manage oil rig configurations and metadata",
      dbTables: ["rigs", "cameras", "sensor_feeds"],
    },
    {
      name: "Analytics & Reports",
      route: "/analytics",
      components: [
        "ComplianceChart",
        "ViolationTrends",
        "HeatmapViewer",
        "ReportGenerator",
        "DateRangePicker",
        "EventTypeBreakdown",
      ],
      description:
        "Compliance metrics, violation trends, and historical analysis",
      dbTables: ["events", "detections", "tracks", "system_metrics"],
    },
    {
      name: "Model Management",
      route: "/models",
      components: [
        "ModelList",
        "ModelVersionSelector",
        "MetricsViewer",
        "ArtifactUploader",
        "TrainingDataRef",
      ],
      description: "Manage ML models, versions, and performance metrics",
      dbTables: ["models", "model_versions"],
    },
    {
      name: "Annotation Studio",
      route: "/annotations",
      components: [
        "AnnotationCanvas",
        "LabelSelector",
        "JobList",
        "QualityReview",
        "DatasetBrowser",
      ],
      description: "Annotate detections for model training and improvement",
      dbTables: [
        "annotation_jobs",
        "annotations",
        "detections",
        "media_objects",
      ],
    },
    {
      name: "User Management",
      route: "/users",
      components: ["UserList", "UserForm", "RoleManager", "PermissionMatrix"],
      description: "Admin panel for user and role management",
      dbTables: ["users", "roles", "permissions", "role_permissions"],
    },
    {
      name: "System Settings",
      route: "/settings",
      components: [
        "AlertConfiguration",
        "ModelVersionSelector",
        "ThresholdSettings",
        "NotificationChannels",
        "SensorFeedConfig",
      ],
      description: "System-wide configuration and preferences",
      dbTables: ["sensor_feeds", "alerts"],
    },
    {
      name: "Audit Logs",
      route: "/audit",
      components: [
        "AuditTable",
        "AuditFilters",
        "ActionTimeline",
        "UserActivityLog",
      ],
      description: "System activity and user action logs",
      dbTables: ["audit_log"],
    },
  ];

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Oil Rig Safety Detection System
          </h1>
          <p className="text-slate-400">
            Complete Application Flow & Architecture
          </p>
        </div>

        {/* Tab Navigation: mobile = 2 columns grid, desktop = horizontal tabs */}
        <div className="mb-6">
          <div
            role="tablist"
            aria-label="Main tabs"
            className="grid grid-cols-2 gap-2 sm:flex sm:gap-4 sm:border-b sm:border-slate-700"
          >
            {["flow", "pages", "components", "validation"].map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-center px-4 py-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    active
                      ? "text-cyan-400 bg-slate-800/60"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              );
            })}
          </div>
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
                  <h3 className="text-xl font-semibold mb-4 text-green-400">
                    1. Edge Processing Layer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Camera className="text-green-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">RTSP Streams</h4>
                      <p className="text-sm text-slate-400">
                        Existing CCTV feeds from multiple cameras on the rig
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Monitor className="text-green-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Detection Engine</h4>
                      <p className="text-sm text-slate-400">
                        YOLOv8/v9 models for person, helmet, vessel, helicopter
                        detection
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Shield className="text-green-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Tracking System</h4>
                      <p className="text-sm text-slate-400">
                        ByteTrack for object tracking across frames
                      </p>
                    </div>
                  </div>
                </div>

                {/* Processing Layer */}
                <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    2. Processing & Rules Engine
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Box className="text-blue-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Zone Compliance</h4>
                      <p className="text-sm text-slate-400">
                        Check object centroids against polygon zones
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <AlertTriangle className="text-blue-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Event Generator</h4>
                      <p className="text-sm text-slate-400">
                        Create structured events for violations and significant
                        occurrences
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Database className="text-blue-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Event Broker</h4>
                      <p className="text-sm text-slate-400">
                        Kafka/MQTT for real-time event streaming
                      </p>
                    </div>
                  </div>
                </div>

                {/* Storage Layer */}
                <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    3. Storage Layer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Database className="text-purple-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">
                        PostgreSQL (TimescaleDB)
                      </h4>
                      <p className="text-sm text-slate-400">
                        Time-series data: detections, tracks, events
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Box className="text-purple-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">MinIO/S3</h4>
                      <p className="text-sm text-slate-400">
                        Object storage for snapshots and video clips
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <FileText className="text-purple-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Event Logs</h4>
                      <p className="text-sm text-slate-400">
                        Structured JSON events with media references
                      </p>
                    </div>
                  </div>
                </div>

                {/* Application Layer */}
                <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-cyan-500">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    4. Application Layer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Monitor className="text-cyan-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Backend API</h4>
                      <p className="text-sm text-slate-400">
                        FastAPI with REST endpoints & WebSocket for real-time
                        updates
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Users className="text-cyan-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">React Dashboard</h4>
                      <p className="text-sm text-slate-400">
                        Web-based monitoring and management interface
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Bell className="text-cyan-400 mb-2" size={24} />
                      <h4 className="font-semibold mb-2">Alert System</h4>
                      <p className="text-sm text-slate-400">
                        Email/SMS/In-app notifications for violations
                      </p>
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
                  {
                    type: "person_no_helmet",
                    severity: "high",
                    desc: "Person detected without helmet in safety zone",
                  },
                  {
                    type: "zone_violation",
                    severity: "critical",
                    desc: "Person/object in restricted danger zone",
                  },
                  {
                    type: "smoking_zone_violation",
                    severity: "high",
                    desc: "Smoking detected outside designated area",
                  },
                  {
                    type: "vessel_unauthorized",
                    severity: "medium",
                    desc: "Vessel in restricted berthing area",
                  },
                  {
                    type: "helicopter_landing",
                    severity: "low",
                    desc: "Helicopter detected on helipad",
                  },
                  {
                    type: "loitering_detected",
                    severity: "medium",
                    desc: "Person/vessel stationary beyond threshold",
                  },
                ].map((event, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-red-500"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm text-cyan-400">
                        {event.type}
                      </code>
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
                    <h3 className="text-xl font-bold text-cyan-400">
                      {page.name}
                    </h3>
                    <code className="text-sm text-slate-400">{page.route}</code>
                  </div>
                  <Monitor className="text-slate-600" size={24} />
                </div>
                <p className="text-slate-300 mb-4">{page.description}</p>
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">
                    Components:
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {page.components.map((comp, cidx) => (
                      <span
                        key={cidx}
                        className="px-3 py-1 bg-slate-900/50 rounded-full text-sm text-cyan-300 border border-slate-700"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">
                    Database Tables:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {page.dbTables.map((table, tidx) => (
                      <span
                        key={tidx}
                        className="px-2 py-1 bg-purple-900/30 rounded text-xs text-purple-300 border border-purple-700/50 font-mono"
                      >
                        {table}
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
                  <div
                    key={idx}
                    className="bg-slate-900/50 p-4 rounded-lg border border-slate-700"
                  >
                    <h4 className="font-semibold text-cyan-400 mb-1">
                      {comp.name}
                    </h4>
                    <p className="text-sm text-slate-400">{comp.usage}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">
                Component Hierarchy Example
              </h2>
              <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400">App</div>
                <div className="ml-4 text-slate-400">├── AuthProvider</div>
                <div className="ml-4 text-slate-400">├── Router</div>
                <div className="ml-8 text-cyan-400">├── Layout</div>
                <div className="ml-12 text-slate-400">│ ├── Navbar</div>
                <div className="ml-12 text-slate-400">│ ├── Sidebar</div>
                <div className="ml-12 text-slate-400">
                  │ └── NotificationBell
                </div>
                <div className="ml-8 text-cyan-400">├── Dashboard</div>
                <div className="ml-12 text-slate-400">│ ├── LiveFeedGrid</div>
                <div className="ml-12 text-slate-400">
                  │ ├── EventSummaryCards
                </div>
                <div className="ml-12 text-slate-400">│ └── AlertPanel</div>
                <div className="ml-8 text-cyan-400">├── Monitoring</div>
                <div className="ml-12 text-slate-400">│ ├── VideoPlayer</div>
                <div className="ml-12 text-slate-400">
                  │ ├── BoundingBoxOverlay
                </div>
                <div className="ml-12 text-slate-400">│ └── ZoneOverlay</div>
                <div className="ml-8 text-cyan-400">└── Events</div>
                <div className="ml-12 text-slate-400"> ├── EventTimeline</div>
                <div className="ml-12 text-slate-400"> ├── EventFilters</div>
                <div className="ml-12 text-slate-400"> └── EventDetails</div>
              </div>
            </div>
          </div>
        )}

        {/* Validation View */}
        {activeTab === "validation" && (
          <div className="space-y-6">
            {/* SRS Alignment Check */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-green-500/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-400">
                <Shield className="text-green-400" />✓ SRS Requirements
                Validation
              </h2>

              <div className="space-y-4">
                {/* Section 3.1 - Person Detection */}
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-400 mb-3">
                    ✓ Person Detection & Tracking
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <strong>SRS Requirement:</strong> Detect and track all
                        persons within camera view
                      </div>
                    </div>
                    <div className="ml-6 space-y-1 text-slate-300">
                      <div>
                        • <code className="text-purple-300">detections</code>{" "}
                        table stores person detections with bbox, confidence
                      </div>
                      <div>
                        • <code className="text-purple-300">tracks</code> +{" "}
                        <code className="text-purple-300">track_points</code>{" "}
                        tables for ByteTrack IDs
                      </div>
                      <div>
                        • Live Monitoring page displays bounding boxes and
                        tracking overlays
                      </div>
                      <div>• Events generated for zone entry/exit</div>
                    </div>
                  </div>
                </div>

                {/* Section 3.2 - Helmet Compliance */}
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-400 mb-3">
                    ✓ Helmet Compliance
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <strong>SRS Requirement:</strong> Detect helmet
                        presence/absence on persons
                      </div>
                    </div>
                    <div className="ml-6 space-y-1 text-slate-300">
                      <div>
                        •{" "}
                        <code className="text-purple-300">
                          detections.attributes
                        </code>{" "}
                        JSONB field stores helmet: true/false
                      </div>
                      <div>
                        •{" "}
                        <code className="text-purple-300">
                          events.event_type
                        </code>{" "}
                        = 'person_no_helmet' for violations
                      </div>
                      <div>
                        • HelmetIndicator component on Live Monitoring page
                      </div>
                      <div>
                        • Critical alerts sent via email/SMS when helmet missing
                        in danger zones
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3.3 - Vessel Detection */}
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-400 mb-3">
                    ✓ Vessel Detection
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <strong>SRS Requirement:</strong> Detect vessels in CCTV
                        water-side feeds
                      </div>
                    </div>
                    <div className="ml-6 space-y-1 text-slate-300">
                      <div>
                        •{" "}
                        <code className="text-purple-300">
                          detections.object_class
                        </code>{" "}
                        = 'vessel'
                      </div>
                      <div>• Zone compliance for berth and danger polygons</div>
                      <div>
                        • Event types: 'vessel_unauthorized', 'vessel_loiter'
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3.4 - Helicopter Detection */}
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-400 mb-3">
                    ✓ Helicopter Detection
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <strong>SRS Requirement:</strong> Detect helicopters on
                        helipad feed
                      </div>
                    </div>
                    <div className="ml-6 space-y-1 text-slate-300">
                      <div>
                        •{" "}
                        <code className="text-purple-300">
                          detections.object_class
                        </code>{" "}
                        = 'helicopter'
                      </div>
                      <div>
                        • <code className="text-purple-300">zones.type</code> =
                        'helipad' for landing zone
                      </div>
                      <div>
                        • Event type: 'helicopter_landing' when detected in
                        helipad polygon
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3.5 - Zone Compliance */}
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-400 mb-3">
                    ✓ Zone Compliance Engine
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <strong>SRS Requirement:</strong> Check object centroid
                        vs polygonal zones
                      </div>
                    </div>
                    <div className="ml-6 space-y-1 text-slate-300">
                      <div>
                        •{" "}
                        <code className="text-purple-300">
                          zones.polygon_img
                        </code>{" "}
                        stores [[x,y],...] coordinates
                      </div>
                      <div>
                        •{" "}
                        <code className="text-purple-300">
                          detections.bbox_center
                        </code>{" "}
                        for centroid calculation
                      </div>
                      <div>
                        • Zone types: danger, smoking, helipad, berth, safe
                      </div>
                      <div>
                        • Zone Management page with PolygonDrawer component
                      </div>
                      <div>
                        • ZoneOverlay component displays zones on live feed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3.6 - Event Logging */}
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-400 mb-3">
                    ✓ Event Logging & Storage
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <strong>SRS Requirement:</strong> Persist events in
                        PostgreSQL, snapshots in MinIO/S3
                      </div>
                    </div>
                    <div className="ml-6 space-y-1 text-slate-300">
                      <div>
                        • <code className="text-purple-300">events</code> table
                        (TimescaleDB hypertable on start_ts)
                      </div>
                      <div>
                        • <code className="text-purple-300">media_objects</code>{" "}
                        table links to S3 paths
                      </div>
                      <div>
                        • Event fields: event_type, severity, start_ts, end_ts,
                        related_tracks
                      </div>
                      <div>
                        • Sample JSON format matches SRS Appendix 6.1
                        specification
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3.7 - Dashboard */}
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-400 mb-3">
                    ✓ Dashboard & Alerts
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <strong>SRS Requirement:</strong> Web dashboard with
                        live monitoring and alerts
                      </div>
                    </div>
                    <div className="ml-6 space-y-1 text-slate-300">
                      <div>
                        • Dashboard page: LiveFeedGrid, EventTimeline,
                        AlertPanel
                      </div>
                      <div>
                        • Live Monitoring page: VideoPlayer with
                        BoundingBoxOverlay + ZoneOverlay
                      </div>
                      <div>
                        • Events & Alerts page: EventTimeline, filters,
                        acknowledgment workflow
                      </div>
                      <div>
                        • <code className="text-purple-300">alerts</code> table
                        with multi-channel support (SMS, email, in-app)
                      </div>
                      <div>• WebSocket for real-time updates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Stack Alignment */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">
                Software Interfaces Validation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-2 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">✓</span>
                    <strong>Database: PostgreSQL</strong>
                  </div>
                  <p className="text-sm text-slate-400">
                    Complete schema with TimescaleDB hypertables for detections,
                    track_points, events
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-2 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">✓</span>
                    <strong>Object Storage: MinIO/S3</strong>
                  </div>
                  <p className="text-sm text-slate-400">
                    media_objects table with s3_path, bucket fields
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-2 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">✓</span>
                    <strong>Event Broker: Kafka/MQTT</strong>
                  </div>
                  <p className="text-sm text-slate-400">
                    Processing layer includes event broker for real-time
                    streaming
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-2 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">✓</span>
                    <strong>Backend: FastAPI (REST + WebSocket)</strong>
                  </div>
                  <p className="text-sm text-slate-400">
                    Application layer architecture includes FastAPI backend
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-2 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">✓</span>
                    <strong>Frontend: ReactJS</strong>
                  </div>
                  <p className="text-sm text-slate-400">
                    All 13 pages built with React components
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-2 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">✓</span>
                    <strong>RTSP Streams</strong>
                  </div>
                  <p className="text-sm text-slate-400">
                    cameras.rtsp_url field + RTSPTester component
                  </p>
                </div>
              </div>
            </div>

            {/* Non-Functional Requirements */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">
                Non-Functional Requirements
              </h2>
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-400">→</span>
                    <strong>Performance</strong>
                  </div>
                  <div className="text-sm text-slate-300 space-y-1">
                    <div>
                      • Latency: &lt;500ms detection-to-alert (edge processing +
                      Kafka/MQTT streaming)
                    </div>
                    <div>
                      • Throughput: 8+ concurrent streams per edge node
                      (architecture supports)
                    </div>
                    <div>
                      • TimescaleDB hypertables optimize time-series queries
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-400">→</span>
                    <strong>Reliability</strong>
                  </div>
                  <div className="text-sm text-slate-300">
                    • 99% uptime target supported by edge buffering architecture
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-400">→</span>
                    <strong>Security</strong>
                  </div>
                  <div className="text-sm text-slate-300 space-y-1">
                    <div>
                      • RBAC: users, roles, permissions, role_permissions tables
                    </div>
                    <div>• Audit trail: audit_log table for all actions</div>
                    <div>
                      • Authentication: Login page with RoleBasedRedirect
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-400">→</span>
                    <strong>Maintainability</strong>
                  </div>
                  <div className="text-sm text-slate-300 space-y-1">
                    <div>
                      • Modular architecture: Edge → Processing → Storage →
                      Application layers
                    </div>
                    <div>
                      • Config-driven zones: zones table with polygon_img JSONB
                    </div>
                    <div>• Model Management page for version control</div>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-400">→</span>
                    <strong>Scalability</strong>
                  </div>
                  <div className="text-sm text-slate-300 space-y-1">
                    <div>
                      • Horizontal scaling: Multiple edge nodes supported
                    </div>
                    <div>
                      • Database: UUID primary keys, TimescaleDB compression
                    </div>
                    <div>
                      • 5 → 50 CCTV feeds: Rig Management page for multi-rig
                      deployment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Schema Coverage */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">
                Complete Database Coverage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {[
                  {
                    table: "rigs",
                    page: "Rig Management + Dashboard selector",
                  },
                  {
                    table: "cameras",
                    page: "Camera Configuration + Live Monitoring",
                  },
                  { table: "zones", page: "Zone Management (polygon drawing)" },
                  {
                    table: "sensor_feeds",
                    page: "System Settings",
                  },
                  {
                    table: "detections",
                    page: "Live Monitoring (bounding boxes)",
                  },
                  {
                    table: "tracks + track_points",
                    page: "Live Monitoring (tracking IDs)",
                  },
                  {
                    table: "fused_tracks + fused_track_points",
                    page: "Reserved for cross-camera fusion",
                  },
                  { table: "events", page: "Events & Alerts page" },
                  {
                    table: "media_objects",
                    page: "SnapshotViewer + MediaGallery",
                  },
                  {
                    table: "models + model_versions",
                    page: "Model Management",
                  },
                  {
                    table: "annotation_jobs + annotations",
                    page: "Annotation Studio",
                  },
                  {
                    table: "users + roles + permissions",
                    page: "User Management + Login",
                  },
                  { table: "audit_log", page: "Audit Logs page" },
                  {
                    table: "alerts",
                    page: "Alert configuration + notifications",
                  },
                  {
                    table: "system_metrics",
                    page: "Analytics page (future metrics)",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/50 p-3 rounded border-l-2 border-purple-500"
                  >
                    <code className="text-purple-300">{item.table}</code>
                    <div className="text-slate-400 text-xs mt-1">
                      → {item.page}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemFlowDiagram;
