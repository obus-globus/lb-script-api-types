import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DirectoryNode } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/DirectoryNode.d.ts'
export class Node extends Object {
    constructor(cowPath: (Object | null)[])
    // private parent: DirectoryNode;
    // private path: (Object | null)[];
    name(): string;
    path(): (Object | null)[];
    setParent(parent: DirectoryNode): void;
    setPath(path: (Object | null)[]): void;
}