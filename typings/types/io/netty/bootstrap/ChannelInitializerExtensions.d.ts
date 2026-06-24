import type { ChannelInitializerExtensions$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ChannelInitializerExtension } from '../../../io/netty/bootstrap/ChannelInitializerExtension.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ChannelInitializerExtensions extends Object {
    private constructor()
    constructor(arg0: ChannelInitializerExtensions$1)
    extensions(arg0: ClassLoader): ChannelInitializerExtension[];
}