import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
export interface GameTest extends Annotation, Object{
    constructor(environment: string, manualOnly: boolean, maxAttempts: number, maxTicks: number, padding: number, required: boolean, requiredSuccesses: number, rotation: Rotation, setupTicks: number, skyAccess: boolean, structure: string)
    /*not mapped: */ environment(): string;
    /*not mapped: */ manualOnly(): boolean;
    /*not mapped: */ maxAttempts(): number;
    /*not mapped: */ maxTicks(): number;
    /*not mapped: */ padding(): number;
    /*not mapped: */ required(): boolean;
    /*not mapped: */ requiredSuccesses(): number;
    /*not mapped: */ rotation(): Rotation;
    /*not mapped: */ setupTicks(): number;
    /*not mapped: */ skyAccess(): boolean;
    /*not mapped: */ structure(): string;
}