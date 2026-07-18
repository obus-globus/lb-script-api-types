import type { OptimizedCallTarget } from '../../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { RootFunctionEvent } from '../../../../../../com/oracle/truffle/runtime/jfr/RootFunctionEvent.d.ts'
import type { Event } from '../../../../../../jdk/jfr/Event.d.ts'
export abstract class RootFunctionEventImpl extends Event implements RootFunctionEvent {
    constructor()
    constructor(engineId: number, id: number, source: string, language: string, rootFunction: string)
    engineId: number;
    id: number;
    language: string;
    rootFunction: string;
    source: string;
    publish(): void;
    setRootFunction(target: OptimizedCallTarget): void;
}