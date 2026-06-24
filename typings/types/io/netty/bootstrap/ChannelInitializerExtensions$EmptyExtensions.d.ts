import type { ChannelInitializerExtensions$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ChannelInitializerExtension } from '../../../io/netty/bootstrap/ChannelInitializerExtension.d.ts'
import type { ChannelInitializerExtensions } from '../../../io/netty/bootstrap/ChannelInitializerExtensions.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
export class ChannelInitializerExtensions$EmptyExtensions extends ChannelInitializerExtensions {
    private constructor()
    constructor(arg0: ChannelInitializerExtensions$1)
    extensions(arg0: ClassLoader): ChannelInitializerExtension[];
}