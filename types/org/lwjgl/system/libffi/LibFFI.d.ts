import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { FFICIF } from '../../../../org/lwjgl/system/libffi/FFICIF.d.ts'
import type { FFIClosure } from '../../../../org/lwjgl/system/libffi/FFIClosure.d.ts'
import type { FFIType } from '../../../../org/lwjgl/system/libffi/FFIType.d.ts'
export class LibFFI extends Object {
    static FFI_BAD_ABI: number;
    static FFI_BAD_ARGTYPE: number;
    static FFI_BAD_TYPEDEF: number;
    static FFI_DEFAULT_ABI: number;
    static FFI_EFI64: number;
    static FFI_FASTCALL: number;
    static FFI_FIRST_ABI: number;
    static FFI_GNUW64: number;
    static FFI_LAST_ABI: number;
    static FFI_MS_CDECL: number;
    static FFI_OK: number;
    static FFI_PASCAL: number;
    static FFI_REGISTER: number;
    static FFI_STDCALL: number;
    static FFI_SYSV: number;
    static FFI_THISCALL: number;
    static FFI_TYPE_DOUBLE: number;
    static FFI_TYPE_FLOAT: number;
    static FFI_TYPE_INT: number;
    static FFI_TYPE_LONGDOUBLE: number;
    static FFI_TYPE_POINTER: number;
    static FFI_TYPE_SINT16: number;
    static FFI_TYPE_SINT32: number;
    static FFI_TYPE_SINT64: number;
    static FFI_TYPE_SINT8: number;
    static FFI_TYPE_STRUCT: number;
    static FFI_TYPE_UINT16: number;
    static FFI_TYPE_UINT32: number;
    static FFI_TYPE_UINT64: number;
    static FFI_TYPE_UINT8: number;
    static FFI_TYPE_VOID: number;
    static FFI_UNIX64: number;
    static FFI_VERSION_NUMBER: number;
    static FFI_VERSION_STRING: string;
    static FFI_VFP: number;
    static FFI_WIN64: number;
    static ffi_type_double: FFIType;
    static ffi_type_float: FFIType;
    static ffi_type_longdouble: FFIType;
    static ffi_type_pointer: FFIType;
    static ffi_type_schar: FFIType;
    static ffi_type_sint: FFIType;
    static ffi_type_sint16: FFIType;
    static ffi_type_sint32: FFIType;
    static ffi_type_sint64: FFIType;
    static ffi_type_sint8: FFIType;
    static ffi_type_slong: FFIType;
    static ffi_type_sshort: FFIType;
    static ffi_type_uchar: FFIType;
    static ffi_type_uint: FFIType;
    static ffi_type_uint16: FFIType;
    static ffi_type_uint32: FFIType;
    static ffi_type_uint64: FFIType;
    static ffi_type_uint8: FFIType;
    static ffi_type_ulong: FFIType;
    static ffi_type_ushort: FFIType;
    static ffi_type_void: FFIType;
    static ffi_call(paramarg0: FFICIF, paramarg1: number, paramarg2: ByteBuffer, paramarg3: PointerBuffer): void;
    static ffi_closure_alloc(paramarg0: number, paramarg1: PointerBuffer): FFIClosure;
    static ffi_closure_free(paramarg0: FFIClosure): void;
    static ffi_get_closure_size(): number;
    static ffi_get_default_abi(): number;
    static ffi_get_struct_offsets(paramarg0: number, paramarg1: FFIType, paramarg2: PointerBuffer): number;
    static ffi_get_version(): string;
    static ffi_get_version_number(): number;
    static ffi_prep_cif(paramarg0: FFICIF, paramarg1: number, paramarg2: FFIType, paramarg3: PointerBuffer): number;
    static ffi_prep_cif_var(paramarg0: FFICIF, paramarg1: number, paramarg2: number, paramarg3: FFIType, paramarg4: PointerBuffer): number;
    static ffi_prep_closure_loc(paramarg0: FFIClosure, paramarg1: FFICIF, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nffi_call(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nffi_closure_alloc(paramarg0: number, paramarg1: number): number;
    static nffi_closure_free(paramarg0: number): void;
    static nffi_get_struct_offsets(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nffi_get_version(): number;
    static nffi_prep_cif(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nffi_prep_cif_var(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nffi_prep_closure_loc(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}