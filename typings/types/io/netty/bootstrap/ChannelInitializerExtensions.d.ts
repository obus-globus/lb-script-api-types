import type { ChannelInitializerExtension } from '../../../io/netty/bootstrap/ChannelInitializerExtension.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ChannelInitializerExtensions extends Object {
    constructor(arg0: any)
    extensions(arg0: ClassLoader): ChannelInitializerExtension[];
}