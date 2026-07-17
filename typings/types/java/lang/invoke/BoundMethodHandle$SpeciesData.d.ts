import type { Class } from '../../../java/lang/Class.d.ts'
type BoundMethodHandle$Specializer = any; // A17-N4: dependency has no emitted module (skipped); aliased so the name resolves
import type { ClassSpecializer$SpeciesData } from '../../../java/lang/invoke/ClassSpecializer$SpeciesData.d.ts'
import type { LambdaForm$BasicType } from '../../../java/lang/invoke/LambdaForm$BasicType.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class BoundMethodHandle$SpeciesData extends ClassSpecializer$SpeciesData {
    constructor(arg0: BoundMethodHandle$Specializer, arg1: string)
    // private extensions: BoundMethodHandle$SpeciesData[];
    deriveClassName(): string;
    deriveFieldTypes(arg0: string): Class<Object>[];
    deriveTransformHelper(arg0: MemberName, arg1: number): MethodHandle;
    deriveTransformHelperArguments<X extends unknown>(arg0: MemberName, arg1: number, arg2: X[], arg3: X[]): X[];
    deriveTypeString(): string;
    extendWith(arg0: LambdaForm$BasicType): BoundMethodHandle$SpeciesData;
    // private verifyTHAargs(arg0: MemberName, arg1: number, arg2: (Object | null)[], arg3: (Object | null)[]): boolean;
}