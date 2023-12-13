#!/usr/bin/env node

// eslint-disable-next-line import/extensions
import { greeting } from '../src/engine.js';
import { startGame } from '../src/engine.js';

const name = greeting();
startGame(name);
