import type { Object } from '../../../java/lang/Object.d.ts'
import type { RuntimeOptions$Descriptor } from '../../../org/graalvm/nativeimage/RuntimeOptions$Descriptor.d.ts'
export class RuntimeOptions extends Object {
    static get(paramoptionName: string): Object | null;
    static getDescriptor(paramoptionName: string): RuntimeOptions$Descriptor;
    static listDescriptors(): RuntimeOptions$Descriptor[];
    static set(paramoptionName: string, paramvalue: Object): void;
    private constructor()
}