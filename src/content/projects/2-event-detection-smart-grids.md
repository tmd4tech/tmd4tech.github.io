---
title: "Event Detection in Smart Grids"
subtitle: "Catching disturbances in streaming grid measurements as they happen"
order: 2
stack:
  - "Anomaly Detection"
  - "Temporal Modelling"
  - "Streaming Data"
  - "Python"
link: "#"
---
### The problem
Grid disturbances — abnormal oscillations, incipient faults — announce themselves in measurement streams, but only if something is watching in real time. Post-hoc analysis explains yesterday's outage; it doesn't prevent tomorrow's.

### What I built
Real-time event-detection models that run on streaming grid measurements, combining anomaly detection with temporal modelling to flag disturbances, abnormal oscillations, and fault patterns as they emerge — improving situational awareness and helping localize faults.

### Methodology
- Modelled normal grid behaviour so deviations could be scored against it in real time.
- Applied temporal models to distinguish transient noise from developing faults.
- Designed detections to support fault localization, not just alerting — pointing operators toward where, not only that.
