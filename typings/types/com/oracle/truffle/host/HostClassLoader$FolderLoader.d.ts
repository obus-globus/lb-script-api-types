import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { HostClassLoader$Loader } from '../../../../com/oracle/truffle/host/HostClassLoader$Loader.d.ts'
import type { HostClassLoader$Resource } from '../../../../com/oracle/truffle/host/HostClassLoader$Resource.d.ts'
export class HostClassLoader$FolderLoader extends HostClassLoader$Loader {
    constructor(root: TruffleFile)
    close(): void;
    findResource(name: string): HostClassLoader$Resource;
}