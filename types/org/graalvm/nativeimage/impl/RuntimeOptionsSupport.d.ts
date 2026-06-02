import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RuntimeOptions$Descriptor } from '../../../../org/graalvm/nativeimage/RuntimeOptions$Descriptor.d.ts'
export interface RuntimeOptionsSupport extends Object{
    get<T extends Object | number | string | boolean>(optionName: string): T;
    getDescriptor(optionName: string): RuntimeOptions$Descriptor;
    listDescriptors(): RuntimeOptions$Descriptor[];
    set(optionName: string, value: Object): void;
}