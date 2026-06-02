import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { HostClassLoader$JarLoader$ZipUtils$Info } from '../../../../com/oracle/truffle/host/HostClassLoader$JarLoader$ZipUtils$Info.d.ts'
import type { HostClassLoader$Loader } from '../../../../com/oracle/truffle/host/HostClassLoader$Loader.d.ts'
import type { HostClassLoader$Resource } from '../../../../com/oracle/truffle/host/HostClassLoader$Resource.d.ts'
import type { SeekableByteChannel } from '../../../../java/nio/channels/SeekableByteChannel.d.ts'
export class HostClassLoader$JarLoader extends HostClassLoader$Loader {
    constructor(root: TruffleFile)
    // private content: { [key: string]: { [key: string]: HostClassLoader$JarLoader$ZipUtils$Info } };
    close(): void;
    findResource(name: string): HostClassLoader$Resource;
    // private getChannel(): SeekableByteChannel;
    // private getResourceMap(): { [key: string]: { [key: string]: HostClassLoader$JarLoader$ZipUtils$Info } };
}