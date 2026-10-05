# Music App

App de música hecha con React Native, Expo Router y React Native Paper.

## Funcionalidad: Playlists personalizadas (Vibe Coding con GitHub Copilot)

### Prompt utilizado
Este es un proyecto de React Native con Expo Router, usando React Native Paper para los componentes visuales. La estructura usa src/app/(tabs)/ para las pantallas con barra inferior (index.js = Home, explorar.js = Explorar) y src/app/reproductor.js como pantalla de reproductor fuera del grupo de tabs.

Quiero agregar la funcionalidad de crear playlists personalizadas: el usuario debe poder crear una playlist nueva con un nombre, agregar canciones existentes de la app a esa playlist, ver la lista de playlists creadas, y ver qué canciones tiene cada una.

Restricciones: no instalar librerías nuevas, no usar APIs externas, reutilizar los datos de canciones y componentes que ya existen en el proyecto (como SongCard), usar componentes de React Native Paper, y no romper la navegación ni las pantallas actuales. La playlist debe persistir mientras el usuario navega entre pantallas, similar al patrón de Context que ya usé en otro proyecto mío (PendientesContext), que guarda un estado global con un Provider.

Antes de modificar nada, dame un plan detallado de qué archivos vas a crear o modificar, y cómo lo vas a implementar.

### Plan propuesto por el agente
Plan: Playlists Personalizadas Implementar creación y consulta de playlists usando el catálogo existente de Inicio, un PlaylistProvider global y componentes de React Native Paper. El estado permanecerá disponible al navegar entre pantallas durante la sesión; no se guardará tras cerrar o reiniciar la app. No se instalarán dependencias ni se usarán APIs externas. Pasos
1. Extraer las cuatro canciones de Inicio a src/data/songs.js (nuevo módulo) y hacer que Inicio importe ese catálogo compartido. Se conservan los datos y el flujo actual hacia el reproductor.
2. Crear src/context/PlaylistContext.js (nuevo módulo) con el estado compartido y la operación para crear una playlist. Cada playlist tendrá un ID, un nombre y los IDs de las canciones seleccionadas, evitando copiar los datos de las canciones.
3. Envolver el Stack actual en PlaylistProvider desde _layout.js. No cambiar las rutas ni las opciones actuales de navegación.
4. Reemplazar el placeholder de src/app/(tabs)/crear.js/crear.js) por un formulario con nombre, selección múltiple de canciones del catálogo compartido y acción para guardar. Usar controles de React Native Paper, validar el nombre y requerir al menos una canción.
5. Reemplazar el placeholder de src/app/(tabs)/biblioteca.js/biblioteca.js) por una lista de playlists y un estado vacío. Cada playlist se podrá desplegar con List.Accordion para ver sus canciones mediante el catálogo compartido y SongCard.
6. Al pulsar una canción en Biblioteca, abrir /reproductor con los parámetros actuales: titulo, artista e imagen. No hace falta modificar reproductor.js ni SongCard.js.
Archivos
* src/app/(tabs)/index.js: consumir el nuevo catálogo, manteniendo la pantalla y navegación actuales.
* src/data/songs.js: nuevo catálogo compartido de canciones.
* src/context/PlaylistContext.js: nuevo provider y estado global en memoria.
* _layout.js: montar el provider alrededor del Stack.
* src/app/(tabs)/crear.js/crear.js): formulario de creación y selección.
* src/app/(tabs)/biblioteca.js/biblioteca.js): listado y contenido desplegable de playlists.
Verificación
1. Ejecutar npx expo lint y npx tsc --noEmit.
2. Confirmar que Inicio conserva las mismas canciones y que sigue abriendo el reproductor.
3. Probar validación del nombre, selección de canciones, guardado y limpieza del formulario.
4. Comprobar que la playlist aparece en Biblioteca, muestra las canciones elegidas y que abrir una de ellas llega al reproductor con sus datos.
5. Navegar entre Inicio, Crear, Biblioteca y Reproductor y verificar que las playlists siguen disponibles durante la sesión.
Decisiones acordadas
* Solo se podrán agregar canciones durante la creación; Biblioteca permitirá consultar el listado y desplegar su contenido, no editarlo.
* Las canciones seleccionables serán las cuatro de Inicio. Los destacados de Explorar son etiquetas sin artista ni acción funcional, así que quedan fuera.
* La persistencia cubre la navegación dentro de la sesión, no el cierre o reinicio de la app.
* No se incluyen eliminación, edición posterior, orden personalizado ni cola de reproducción.
No he modificado archivos del proyecto. El plan queda guardado en la memoria de esta sesión para la revisión.

### Resultado
✅ Implementado: playlists personalizadas
He dejado funcionando el flujo pedido:

Crear una playlist con nombre y selección de canciones
Ver la lista de playlists creadas
Desplegar cada playlist para ver qué canciones tiene
Usar el mismo catálogo existente para reutilizar canciones y evitar duplicar datos
Mantener el estado global mientras el usuario navega entre pantallas usando un Provider de contexto
Archivos principales tocados
songs.js
PlaylistContext.js
_layout.js
src/app/(tabs)/crear.js/crear.js)
src/app/(tabs)/biblioteca.js/biblioteca.js)
src/app/(tabs)/index.js/index.js)
También corregí una ruta web que estaba rompiendo el tipo-check en:

app-tabs.web.tsx
🔧 Cómo funciona ahora
El catálogo de canciones queda centralizado y compartido.
El PlaylistProvider guarda el estado en memoria mientras la app está abierta.
Desde la pestaña Crear, el usuario pone nombre y marca canciones.
La playlist se guarda y queda visible en Biblioteca.
Cada playlist despliega sus canciones y al tocar una, se abre el reproductor con los mismos parámetros que usa la app hoy.



