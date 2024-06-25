'use strict';

import particlesConfig from '../assets/particles.json';
import {Particles} from "particles.ts";

/**
 * Particles
 */
new Particles('particles-js', particlesConfig as unknown as Map<string, any>).start();

/**
 * Theme
 */
export function changeColor(obj: HTMLElement, color: string, backgroundColor: string): void {
    obj.style.backgroundColor = backgroundColor;
    obj.style.color = color;
}

/**
 * Routing
 */
export function openProject(projectId: string): void {
    window.open(`${projectId}.html`, '_blank');
}
