import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DebugValueSource$Registration } from '../../../../net/minecraft/util/debug/DebugValueSource$Registration.d.ts'
export interface DebugValueSource extends Object{
    registerDebugValues(level: ServerLevel, registration: DebugValueSource$Registration): void;
}