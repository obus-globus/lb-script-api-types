import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlinedExactClassProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { ValueProfile } from '../../../../../com/oracle/truffle/api/profiles/ValueProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PrimitiveValueProfile extends ValueProfile {
    static create(): PrimitiveValueProfile;
    static create(): ValueProfile;
    static createClassProfile(): ValueProfile;
    static createEqualityProfile(): PrimitiveValueProfile;
    static createIdentityProfile(): ValueProfile;
    static getUncached(): PrimitiveValueProfile;
    static getUncached(): ValueProfile;
    static inline(paramtarget: InlineSupport$InlineTarget): InlinedExactClassProfile;
    constructor()
    // private cachedValue: Object;
    disable(): void;
    // private formatSpecialization(): string;
    getCachedValue(): Object;
    isGeneric(): boolean;
    isUninitialized(): boolean;
    profile<T extends unknown>(v: T): T;
    profile(value: boolean): boolean;
    profile(value: number): number;
    profile(value: string): string;
    reset(): void;
    // private slowPath(value: Object): void;
    toString(): string;
    toString(profileClass: Class<Object>, uninitialized: boolean, generic: boolean, specialization: string): string;
}