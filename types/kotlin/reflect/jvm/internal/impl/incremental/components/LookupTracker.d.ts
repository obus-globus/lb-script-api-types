import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Position } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/Position.d.ts'
import type { ScopeKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/ScopeKind.d.ts'
export interface LookupTracker extends Object{
    getRequiresPosition(): boolean;
    record(arg0: string, arg1: Position, arg2: string, arg3: ScopeKind, arg4: string): void;
}