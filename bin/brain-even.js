#!/usr/bin/env node

// eslint-disable-next-line import/extensions
import { greeting, startGame } from '../src/engine.js';

const name = greeting();
startGame('even', name);
