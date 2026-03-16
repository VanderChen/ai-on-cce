---
title: Deploy Llama 3 on CCE with vLLM
---

# Deploy Llama 3 on CCE with vLLM

This article demonstrates how to leverage CCE's high-performance GPU instances and the metadata in `blueprints/inference/vllm-llama3.yaml` to quickly launch a Llama 3 inference service.

## Core Configuration
By configuring `nvidia.com/gpu` limits, CCE will automatically allocate physical GPU resources to your Pod.
