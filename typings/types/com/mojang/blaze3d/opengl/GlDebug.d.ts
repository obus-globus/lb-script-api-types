import type { GlDebug$LogEntry } from '../../../../com/mojang/blaze3d/opengl/GlDebug$LogEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlDebug extends Object {
    static enableDebugCallback(paramverbosity: number, paramdebugSynchronousGlLogs: boolean, paramenabledExtensions: string[]): GlDebug;
    static severityToString(paramseverity: number): string;
    static sourceToString(paramsource: number): string;
    static typeToString(paramtype: number): string;
    constructor()
    // private MESSAGE_BUFFER: GlDebug$LogEntry[];
    // private lastEntry: GlDebug$LogEntry;
    getLastOpenGlDebugMessages(): string[];
    // private printDebugLog(source: number, type: number, id: number, severity: number, length: number, message: number, userParam: number): void;
}