uniform float u_red;
uniform float u_blue;
uniform float u_green;

varying float vDepth;

void main() {
    if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.5) discard;
    
    // Opacity based on depth - back fragments fully invisible, front fully opaque
    // Adjust the range values to control the transition zone
    float alpha = 1.0 - smoothstep(8.0, 15.0, vDepth);
    
    gl_FragColor = vec4(vec3(u_red, u_green, u_blue), alpha);
}