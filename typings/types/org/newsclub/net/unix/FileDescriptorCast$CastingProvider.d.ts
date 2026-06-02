import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileDescriptorCast } from '../../../../org/newsclub/net/unix/FileDescriptorCast.d.ts'
export interface FileDescriptorCast$CastingProvider<T extends Object | number | string | boolean> extends Object{
    provideAs(arg0: FileDescriptorCast, arg1: Class<T>): T;
}