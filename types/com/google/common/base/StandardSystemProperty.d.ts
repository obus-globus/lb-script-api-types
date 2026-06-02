import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class StandardSystemProperty extends Enum<StandardSystemProperty> {
    static FILE_SEPARATOR: StandardSystemProperty;
    static JAVA_CLASS_PATH: StandardSystemProperty;
    static JAVA_CLASS_VERSION: StandardSystemProperty;
    static JAVA_COMPILER: StandardSystemProperty;
    static JAVA_EXT_DIRS: StandardSystemProperty;
    static JAVA_HOME: StandardSystemProperty;
    static JAVA_IO_TMPDIR: StandardSystemProperty;
    static JAVA_LIBRARY_PATH: StandardSystemProperty;
    static JAVA_SPECIFICATION_NAME: StandardSystemProperty;
    static JAVA_SPECIFICATION_VENDOR: StandardSystemProperty;
    static JAVA_SPECIFICATION_VERSION: StandardSystemProperty;
    static JAVA_VENDOR: StandardSystemProperty;
    static JAVA_VENDOR_URL: StandardSystemProperty;
    static JAVA_VERSION: StandardSystemProperty;
    static JAVA_VM_NAME: StandardSystemProperty;
    static JAVA_VM_SPECIFICATION_NAME: StandardSystemProperty;
    static JAVA_VM_SPECIFICATION_VENDOR: StandardSystemProperty;
    static JAVA_VM_SPECIFICATION_VERSION: StandardSystemProperty;
    static JAVA_VM_VENDOR: StandardSystemProperty;
    static JAVA_VM_VERSION: StandardSystemProperty;
    static LINE_SEPARATOR: StandardSystemProperty;
    static OS_ARCH: StandardSystemProperty;
    static OS_NAME: StandardSystemProperty;
    static OS_VERSION: StandardSystemProperty;
    static PATH_SEPARATOR: StandardSystemProperty;
    static USER_DIR: StandardSystemProperty;
    static USER_HOME: StandardSystemProperty;
    static USER_NAME: StandardSystemProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StandardSystemProperty;
    static values(): (Object | null)[];
    private constructor(key: string)
    // private key: string;
    key(): string;
    toString(): string;
    value(): string;
    name(): "JAVA_VERSION" | "JAVA_VENDOR" | "JAVA_VENDOR_URL" | "JAVA_HOME" | "JAVA_VM_SPECIFICATION_VERSION" | "JAVA_VM_SPECIFICATION_VENDOR" | "JAVA_VM_SPECIFICATION_NAME" | "JAVA_VM_VERSION" | "JAVA_VM_VENDOR" | "JAVA_VM_NAME" | "JAVA_SPECIFICATION_VERSION" | "JAVA_SPECIFICATION_VENDOR" | "JAVA_SPECIFICATION_NAME" | "JAVA_CLASS_VERSION" | "JAVA_CLASS_PATH" | "JAVA_LIBRARY_PATH" | "JAVA_IO_TMPDIR" | "JAVA_COMPILER" | "JAVA_EXT_DIRS" | "OS_NAME" | "OS_ARCH" | "OS_VERSION" | "FILE_SEPARATOR" | "PATH_SEPARATOR" | "LINE_SEPARATOR" | "USER_NAME" | "USER_HOME" | "USER_DIR";
}