import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSYSTEMSocketAddress } from '../../../../org/newsclub/net/unix/AFSYSTEMSocketAddress.d.ts'
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
export class AFSYSTEMSocketImplExtensions extends Object implements AFSocketImplExtensions<AFSYSTEMSocketAddress> {
    constructor(arg0: AncillaryDataSupport)
    getKernelControlId(arg0: FileDescriptor, arg1: string): number;
}