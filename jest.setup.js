// Configuración global para Jest
global.console = {
    ...console,
    // Suprimir logs durante los tests para mantener la salida limpia
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
};
