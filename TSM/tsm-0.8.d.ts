/**
 * @fileoverview TSM - A TypeScript vector and matrix math library
 * @author Matthias Ferch
 * @version 0.6
 */
declare var EPSILON: number;
declare module TSM {
    class vec2 {
        private values;
        x: number;
        y: number;
        xy: number[];
        constructor(values?: number[]);
        at(index: number): number;
        reset(): void;
        copy(dest?: vec2): vec2;
        negate(dest?: vec2): vec2;
        equals(vector: vec2, threshold?: number): boolean;
        length(): number;
        squaredLength(): number;
        add(vector: vec2): vec2;
        subtract(vector: vec2): vec2;
        multiply(vector: vec2): vec2;
        divide(vector: vec2): vec2;
        scale(value: number, dest?: vec2): vec2;
        normalize(dest?: vec2): vec2;
        multiplyMat2(matrix: mat2, dest?: vec2): vec2;
        multiplyMat3(matrix: mat3, dest?: vec2): vec2;
        static cross(vector: vec2, vector2: vec2, dest?: vec3): vec3;
        static dot(vector: vec2, vector2: vec2): number;
        static distance(vector: vec2, vector2: vec2): number;
        static squaredDistance(vector: vec2, vector2: vec2): number;
        static direction(vector: vec2, vector2: vec2, dest?: vec2): vec2;
        static mix(vector: vec2, vector2: vec2, time: number, dest?: vec2): vec2;
        static sum(vector: vec2, vector2: vec2, dest?: vec2): vec2;
        static difference(vector: vec2, vector2: vec2, dest?: vec2): vec2;
        static product(vector: vec2, vector2: vec2, dest?: vec2): vec2;
        static quotient(vector: vec2, vector2: vec2, dest?: vec2): vec2;
        static zero: vec2;
    }
}
/**
 * @fileoverview TSM - A TypeScript vector and matrix math library
 * @author Matthias Ferch
 * @version 0.6
 */
declare module TSM {
    class vec3 {
        private values;
        x: number;
        y: number;
        z: number;
        xy: number[];
        xyz: number[];
        constructor(values?: number[]);
        at(index: number): number;
        reset(): void;
        copy(dest?: vec3): vec3;
        negate(dest?: vec3): vec3;
        equals(vector: vec3, threshold?: number): boolean;
        length(): number;
        squaredLength(): number;
        add(vector: vec3): vec3;
        subtract(vector: vec3): vec3;
        multiply(vector: vec3): vec3;
        divide(vector: vec3): vec3;
        scale(value: number, dest?: vec3): vec3;
        normalize(dest?: vec3): vec3;
        multiplyByMat3(matrix: mat3, dest?: vec3): vec3;
        multiplyByQuat(quat: quat, dest?: vec3): vec3;
        static cross(vector: vec3, vector2: vec3, dest?: vec3): vec3;
        static dot(vector: vec3, vector2: vec3): number;
        static distance(vector: vec3, vector2: vec3): number;
        static squaredDistance(vector: vec3, vector2: vec3): number;
        static direction(vector: vec3, vector2: vec3, dest?: vec3): vec3;
        static mix(vector: vec3, vector2: vec3, time: number, dest?: vec3): vec3;
        static sum(vector: vec3, vector2: vec3, dest?: vec3): vec3;
        static difference(vector: vec3, vector2: vec3, dest?: vec3): vec3;
        static product(vector: vec3, vector2: vec3, dest?: vec3): vec3;
        static quotient(vector: vec3, vector2: vec3, dest?: vec3): vec3;
        toQuat(dest?: quat): quat;
        static zero: vec3;
        static up: vec3;
        static right: vec3;
        static forward: vec3;
    }
}
/**
 * @fileoverview TSM - A TypeScript vector and matrix math library
 * @author Matthias Ferch
 * @version 0.6
 */
declare module TSM {
    class vec4 {
        private values;
        x: number;
        y: number;
        z: number;
        w: number;
        xy: number[];
        xyz: number[];
        xyzw: number[];
        r: number;
        g: number;
        b: number;
        a: number;
        rg: number[];
        rgb: number[];
        rgba: number[];
        constructor(values?: number[]);
        at(index: number): number;
        reset(): void;
        copy(dest?: vec4): vec4;
        negate(dest?: vec4): vec4;
        equals(vector: vec4, threshold?: number): boolean;
        length(): number;
        squaredLength(): number;
        add(vector: vec4): vec4;
        subtract(vector: vec4): vec4;
        multiply(vector: vec4): vec4;
        divide(vector: vec4): vec4;
        scale(value: number, dest?: vec4): vec4;
        normalize(dest?: vec4): vec4;
        multiplyMat4(matrix: mat4, dest?: vec4): vec4;
        static mix(vector: vec4, vector2: vec4, time: number, dest?: vec4): vec4;
        static sum(vector: vec4, vector2: vec4, dest?: vec4): vec4;
        static difference(vector: vec4, vector2: vec4, dest?: vec4): vec4;
        static product(vector: vec4, vector2: vec4, dest?: vec4): vec4;
        static quotient(vector: vec4, vector2: vec4, dest?: vec4): vec4;
        static zero: vec4;
    }
}
/**
 * @fileoverview TSM - A TypeScript vector and matrix math library
 * @author Matthias Ferch
 * @version 0.6
 */
declare module TSM {
    class mat2 {
        private values;
        constructor(values?: number[]);
        at(index: number): number;
        init(values: number[]): mat2;
        reset(): void;
        copy(dest?: mat2): mat2;
        all(): number[];
        row(index: number): number[];
        col(index: number): number[];
        equals(matrix: mat2, threshold?: number): boolean;
        determinant(): number;
        setIdentity(): mat2;
        transpose(): mat2;
        inverse(): mat2;
        multiply(matrix: mat2): mat2;
        rotate(angle: number): mat2;
        multiplyVec2(vector: vec2, result?: vec2): vec2;
        scale(vector: vec2): mat2;
        static product(m1: mat2, m2: mat2, result?: mat2): mat2;
        static identity: mat2;
    }
}
/**
 * @fileoverview TSM - A TypeScript vector and matrix math library
 * @author Matthias Ferch
 * @version 0.6
 */
declare module TSM {
    class mat3 {
        private values;
        constructor(values?: number[]);
        at(index: number): number;
        init(values: number[]): mat3;
        reset(): void;
        copy(dest?: mat3): mat3;
        all(): number[];
        row(index: number): number[];
        col(index: number): number[];
        equals(matrix: mat3, threshold?: number): boolean;
        determinant(): number;
        setIdentity(): mat3;
        transpose(): mat3;
        inverse(): mat3;
        multiply(matrix: mat3): mat3;
        multiplyVec2(vector: vec2, result?: vec2): vec2;
        multiplyVec3(vector: vec3, result?: vec3): vec3;
        toMat4(result?: mat4): mat4;
        toQuat(): quat;
        rotate(angle: number, axis: vec3): mat3;
        static product(m1: mat3, m2: mat3, result?: mat3): mat3;
        static identity: mat3;
    }
}
/**
 * @fileoverview TSM - A TypeScript vector and matrix math library
 * @author Matthias Ferch
 * @version 0.6
 */
declare module TSM {
    class mat4 {
        private values;
        constructor(values?: number[]);
        at(index: number): number;
        init(values: number[]): mat4;
        reset(): void;
        copy(dest?: mat4): mat4;
        all(): number[];
        row(index: number): number[];
        col(index: number): number[];
        equals(matrix: mat4, threshold?: number): boolean;
        determinant(): number;
        setIdentity(): mat4;
        transpose(): mat4;
        inverse(): mat4;
        multiply(matrix: mat4): mat4;
        multiplyVec3(vector: vec3): vec3;
        multiplyVec4(vector: vec4, dest?: vec4): vec4;
        toMat3(): mat3;
        toInverseMat3(): mat3;
        translate(vector: vec3): mat4;
        scale(vector: vec3): mat4;
        rotate(angle: number, axis: vec3): mat4;
        static frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;
        static perspective(fov: number, aspect: number, near: number, far: number): mat4;
        static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;
        static lookAt(position: vec3, target: vec3, up?: vec3): mat4;
        static product(m1: mat4, m2: mat4, result?: mat4): mat4;
        static identity: mat4;
    }
}
/**
 * @fileoverview TSM - A TypeScript vector and matrix math library
 * @author Matthias Ferch
 * @version 0.6
 */
declare module TSM {
    class quat {
        private values;
        x: number;
        y: number;
        z: number;
        w: number;
        xy: number[];
        xyz: number[];
        xyzw: number[];
        constructor(values?: number[]);
        at(index: number): number;
        reset(): void;
        copy(dest?: quat): quat;
        roll(): number;
        pitch(): number;
        yaw(): number;
        equals(vector: quat, threshold?: number): boolean;
        setIdentity(): quat;
        calculateW(): quat;
        static dot(q1: quat, q2: quat): number;
        inverse(): quat;
        conjugate(): quat;
        length(): number;
        normalize(dest?: quat): quat;
        add(other: quat): quat;
        multiply(other: quat): quat;
        multiplyVec3(vector: vec3, dest?: vec3): vec3;
        toMat3(dest?: mat3): mat3;
        toMat4(dest?: mat4): mat4;
        static sum(q1: quat, q2: quat, dest?: quat): quat;
        static product(q1: quat, q2: quat, dest?: quat): quat;
        static cross(q1: quat, q2: quat, dest?: quat): quat;
        static shortMix(q1: quat, q2: quat, time: number, dest?: quat): quat;
        static mix(q1: quat, q2: quat, time: number, dest?: quat): quat;
        static fromAxis(axis: vec3, angle: number, dest?: quat): quat;
        static identity: quat;
    }
}
