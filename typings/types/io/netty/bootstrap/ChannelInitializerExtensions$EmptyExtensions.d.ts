import type { ChannelInitializerExtension } from '../../../io/netty/bootstrap/ChannelInitializerExtension.d.ts'
import type { ChannelInitializerExtensions } from '../../../io/netty/bootstrap/ChannelInitializerExtensions.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
export class ChannelInitializerExtensions$EmptyExtensions extends ChannelInitializerExtensions {
    constructor(arg0: any)
    extensions(arg0: ClassLoader): ChannelInitializerExtension[];
}