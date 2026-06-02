import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProgramUniforms } from '../../../../../net/irisshaders/iris/gl/program/ProgramUniforms.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { DynamicLocationalUniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/DynamicLocationalUniformHolder.d.ts'
import type { DynamicUniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/DynamicUniformHolder.d.ts'
import type { FloatSupplier } from '../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { UniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { UniformType } from '../../../../../net/irisshaders/iris/gl/uniform/UniformType.d.ts'
import type { UniformUpdateFrequency } from '../../../../../net/irisshaders/iris/gl/uniform/UniformUpdateFrequency.d.ts'
import type { Matrix3fc } from '../../../../../org/joml/Matrix3fc.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector2i } from '../../../../../org/joml/Vector2i.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
import type { Vector4i } from '../../../../../org/joml/Vector4i.d.ts'
export class ProgramUniforms$Builder extends Object implements DynamicLocationalUniformHolder {
    constructor(arg0: string, arg1: number)
    // private dynamic: { [key: string]: Uniform };
    // private externalUniformNames: { [key: string]: UniformType };
    // private locations: { [key: number]: string };
    // private name: string;
    // private notifiersToReset: ValueUpdateNotifier[];
    // private once: { [key: string]: Uniform };
    // private perFrame: { [key: string]: Uniform };
    // private perTick: { [key: string]: Uniform };
    // private program: number;
    // private uniformNames: { [key: string]: UniformType };
    addDynamicUniform(arg0: Uniform, arg1: ValueUpdateNotifier): ProgramUniforms$Builder;
    addUniform(arg0: UniformUpdateFrequency, arg1: Uniform): ProgramUniforms$Builder;
    buildUniforms(): ProgramUniforms;
    externallyManagedUniform(arg0: string, arg1: UniformType): UniformHolder;
    location(arg0: string, arg1: UniformType): OptionalInt;
    uniform1f(arg0: string, arg1: () => kotlin.Double, arg2: ValueUpdateNotifier): DynamicLocationalUniformHolder;
    uniform1f(arg0: string, arg1: () => kotlin.Int, arg2: ValueUpdateNotifier): DynamicLocationalUniformHolder;
    uniform1f(arg0: string, arg1: () => kotlin.Float, arg2: ValueUpdateNotifier): DynamicLocationalUniformHolder;
    uniform1i(arg0: string, arg1: () => kotlin.Int, arg2: ValueUpdateNotifier): DynamicLocationalUniformHolder;
    uniform2f(arg0: string, arg1: () => Vector2f, arg2: ValueUpdateNotifier): DynamicLocationalUniformHolder;
    uniform2i(arg0: string, arg1: () => Vector2i, arg2: ValueUpdateNotifier): DynamicLocationalUniformHolder;
    uniform3f(arg0: string, arg1: () => Vector3f, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform4f(arg0: string, arg1: () => Vector4f, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform4fArray(arg0: string, arg1: () => number[], arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform4i(arg0: string, arg1: () => Vector4i, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniformMatrix(arg0: string, arg1: () => Matrix4fc, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniformMatrix3(arg0: string, arg1: () => Matrix3fc, arg2: ValueUpdateNotifier): DynamicUniformHolder;
}