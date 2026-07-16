import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MixinEnvironment$Feature extends Enum<MixinEnvironment$Feature> {
    static INJECTORS_IN_INTERFACE_MIXINS: MixinEnvironment$Feature;
    static UNSAFE_INJECTION: MixinEnvironment$Feature;
    static exists(paramarg0: string): boolean;
    static get(paramarg0: string): MixinEnvironment$Feature;
    static isActive(paramarg0: string): boolean;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MixinEnvironment$Feature;
    static values(): MixinEnvironment$Feature[];
    constructor(arg2: any)
    readonly enabled: boolean;
    isAvailable(): boolean;
    isEnabled(): boolean;
    name(): "UNSAFE_INJECTION" | "INJECTORS_IN_INTERFACE_MIXINS";
}