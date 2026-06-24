import type { MixinEnvironment$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MixinEnvironment$Feature extends Enum<MixinEnvironment$Feature> {
    static INJECTORS_IN_INTERFACE_MIXINS: MixinEnvironment$Feature;
    static UNSAFE_INJECTION: MixinEnvironment$Feature;
    static exists(paramarg0: string): boolean;
    static get(paramarg0: string): MixinEnvironment$Feature;
    static isActive(paramarg0: string): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinEnvironment$Feature;
    static values(): (Object | null)[];
    private constructor()
    private constructor(arg2: boolean)
    constructor(arg2: MixinEnvironment$1)
    readonly enabled: boolean;
    isAvailable(): boolean;
    isEnabled(): boolean;
    name(): "UNSAFE_INJECTION" | "INJECTORS_IN_INTERFACE_MIXINS";
}