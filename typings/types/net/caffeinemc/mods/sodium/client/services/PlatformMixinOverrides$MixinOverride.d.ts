import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlatformMixinOverrides$MixinOverride extends Record {
    constructor(modId: string, option: string, enabled: boolean)
    // private enabled: boolean;
    // private modId: string;
    // private option: string;
    enabled(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modId(): string;
    option(): string;
    toString(): string;
}