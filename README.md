# GitHub TypeScript LRU Cache

This TypeScript project implements an LRU (Least Recently Used) cache.

## Overview
This LRU cache provides a simple key-value storage mechanism, ideal for situations where you need to maintain a limited-size cache and evict the least recently used items when the cache is full.

### Features
LRU Replacement Policy: Automatically removes the least recently used items when the cache reaches its maximum size.
Simple API: Offers get, set methods for easy interaction.
Typed in TypeScript: Written in TypeScript, providing type safety and clear interfaces.

### Installation
To use this LRU cache in your TypeScript project, install it via npm:

```shell script
npm install aero-lru-cache
```

### Usage
```typescript
import LruCache from 'aero-lru-cache';

// Initialize a cache with a maximum size of 100
const lruCache = new LruCache<number, string>(100);

// Add items to the cache
lruCache.get(1, 'Value 1');
lruCache.set(2, 'Value 2');

// Retrieve an item from the cache
const value = lruCache.get(1); // Returns 'Value 1'
```

### Contributing
If you find any issues with the LRU cache or have suggestions for improvement, feel free to open an issue or create a pull request. Contributions are welcome!

### License
This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).



## README

- en [English](README.md)

- zh_CN [简体中文](README_CN.md)

