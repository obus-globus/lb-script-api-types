import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Permission } from '../../java/security/Permission.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class PermissionCollection extends Object implements Serializable {
    constructor()
    readonly readOnly: boolean;
    add(arg0: Permission): void;
    elements(): Enumeration<Permission>;
    elementsAsStream(): Stream<Permission>;
    implies(arg0: Permission): boolean;
    isReadOnly(): boolean;
    setReadOnly(): void;
    toString(): string;
}