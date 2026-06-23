import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
import type { FileDescriptorCast$CastingProviderMap } from '../../../../org/newsclub/net/unix/FileDescriptorCast$CastingProviderMap.d.ts'
export class FileDescriptorCast extends Object implements FileDescriptorAccess {
    static duplicating(paramarg0: FileDescriptor): FileDescriptorCast;
    static unsafeUsing(paramarg0: number): FileDescriptorCast;
    static using(paramarg0: FileDescriptor): FileDescriptorCast;
    private constructor(arg0: FileDescriptor, arg1: FileDescriptorCast$CastingProviderMap)
    // private cpm: FileDescriptorCast$CastingProviderMap;
    // private fdObj: FileDescriptor;
    // private localPort: number;
    // private remotePort: number;
    as<K extends unknown>(arg0: Class<K>): K;
    availableTypes(): Class<Object>[];
    getFileDescriptor(): FileDescriptor;
    isAvailable(arg0: Class<Object>): boolean;
    withLocalPort(arg0: number): FileDescriptorCast;
    withRemotePort(arg0: number): FileDescriptorCast;
}