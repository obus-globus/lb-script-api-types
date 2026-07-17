import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileNode } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/FileNode.d.ts'
import type { Node } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/Node.d.ts'
export class DirectoryNode extends Node {
    constructor(path: (Object | null)[])
    // private childNodes: JavaMap<string, Node>;
    addChild(child: Node): void;
    byPath(path: (Object | null)[]): Node;
    byPathOrNull(path: (Object | null)[]): Node;
    children(): Node[];
    directoryByPath(path: (Object | null)[]): DirectoryNode;
    fileByPath(path: (Object | null)[]): FileNode;
    getChild(name: string): Node;
    removeChild(name: string): void;
}