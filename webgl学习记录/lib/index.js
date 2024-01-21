/**
 * 
 * @param {*} gl WebGLRenderingContext
 * @param {*} VERTEX_SHADER_SOURCE 顶点着色器源代码
 * @param {*} FRAGMENT_SHADER_SOURCE 片元着色器源代码
 * @returns WebGLProgram
 */
function initShader(gl,VERTEX_SHADER_SOURCE,FRAGMENT_SHADER_SOURCE){
    const VERTEX_SHADER = gl.createShader(gl.VERTEX_SHADER);
    const FRAGMENT_SHADER = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(VERTEX_SHADER,VERTEX_SHADER_SOURCE);
    gl.shaderSource(FRAGMENT_SHADER,FRAGMENT_SHADER_SOURCE);
    gl.compileShader(VERTEX_SHADER);
    gl.compileShader(FRAGMENT_SHADER);

    const program = gl.createProgram();
    gl.attachShader(program,VERTEX_SHADER);
    gl.attachShader(program,FRAGMENT_SHADER);
    gl.linkProgram(program);
    gl.useProgram(program);
    return program;
}