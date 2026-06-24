import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EffectEventContext } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/EffectEventContext.d.ts'
export class EffectEventContextImpl extends Record implements EffectEventContext {
    static DEFAULT: EffectEventContext;
    constructor(isFromCommand: boolean, commandName: string)
    // private commandName: string;
    // private isFromCommand: boolean;
    commandName(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isFromCommand(): boolean;
    toString(): string;
}