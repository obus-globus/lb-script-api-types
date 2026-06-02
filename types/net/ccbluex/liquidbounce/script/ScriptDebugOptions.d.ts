import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DebugProtocol } from '../../../../net/ccbluex/liquidbounce/script/DebugProtocol.d.ts'
export class ScriptDebugOptions extends Object {
    constructor(enabled: boolean, protocol: DebugProtocol, suspendOnStart: boolean, inspectInternals: boolean, port: number)
    readonly enabled: boolean;
    readonly inspectInternals: boolean;
    readonly port: number;
    readonly protocol: DebugProtocol;
    readonly suspendOnStart: boolean;
    component1(): boolean;
    component2(): DebugProtocol;
    component3(): boolean;
    component4(): boolean;
    component5(): number;
    copy(enabled: boolean, protocol: DebugProtocol, suspendOnStart: boolean, inspectInternals: boolean, port: number): ScriptDebugOptions;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}