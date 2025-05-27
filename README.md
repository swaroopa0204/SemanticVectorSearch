# AI-Powered Document Question Answering System

## Overview

This project is a scalable, production-ready **Document Question Answering (QA) system** that combines vector search with large language models (LLMs) to deliver precise, context-aware answers from uploaded documents.

Leveraging **Weaviate** as a vector database for semantic search and **Hugging Face** APIs for embeddings and text generation, this system demonstrates modern AI/ML integration with full-stack backend engineering expertise.

---

## Features

- **Semantic Search with Weaviate**: Efficiently index and search document chunks using vector embeddings, enabling deep semantic understanding beyond keyword matching.
- **State-of-the-Art Embeddings**: Uses Hugging Face’s pre-trained sentence transformers to convert queries and documents into high-quality vector representations.
- **Contextual Language Generation**: Incorporates retrieved document chunks into a prompt and generates human-like answers via Hugging Face text generation models.
- **Clean Modular Architecture**: Fully typed TypeScript backend with separation of concerns — Weaviate client, embedding service, LLM service, and Express API controller.
- **Extensible & Maintainable**: Easily extend with additional data sources, improve ranking, or swap LLM providers with minimal code changes.
- **Environment Configured**: Secure handling of API keys through environment variables.

---

## Tech Stack

| Layer              | Technology                      |
|--------------------|--------------------------------|
| Backend Framework  | Node.js, Express, TypeScript    |
| Vector Database     | Weaviate (Cloud-hosted)         |
| Embeddings & LLM    | Hugging Face Inference API      |
| Deployment Ready    | Environment variables, modular |

---

## Architecture Diagram

User Query / API
    ↓
Vector Embeddings (Hugging Face Sentence Models)
    ↓
Weaviate Vector DB (Semantic Search & Similarity Matching)
    ↓
Contextual Prompt + LLM (Hugging Face Text Generation)
    ↓
Answer Response (API Output)


