import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { AccessorGenerator } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorGenerator.d.ts'
import type { AccessorInfo } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo.d.ts'
export class AccessorInfo$AccessorType extends Enum<AccessorInfo$AccessorType> {
    static FIELD_GETTER: AccessorInfo$AccessorType;
    static FIELD_SETTER: AccessorInfo$AccessorType;
    static METHOD_PROXY: AccessorInfo$AccessorType;
    static OBJECT_FACTORY: AccessorInfo$AccessorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AccessorInfo$AccessorType;
    static values(): (Object | null)[];
    constructor(arg2: (Object | null)[], arg3: any)
    readonly expectedPrefixes: string[];
    getExpectedPrefixes(): string[];
    getGenerator(arg0: AccessorInfo): AccessorGenerator;
    isExpectedPrefix(arg0: string): boolean;
    name(): "FIELD_GETTER" | "FIELD_SETTER" | "METHOD_PROXY" | "OBJECT_FACTORY";
}