import type { Object } from '../../../java/lang/Object.d.ts'
import type { RuntimeOptions$Descriptor } from '../../../org/graalvm/nativeimage/RuntimeOptions$Descriptor.d.ts'
export class RuntimeOptions extends Object {
    static get<T extends unknown>(paramoptionName: string): T;
    static getDescriptor(paramoptionName: string): RuntimeOptions$Descriptor;
    static listDescriptors(): RuntimeOptions$Descriptor[];
    static set(paramoptionName: string, paramvalue: Object): void;
    private constructor()
}