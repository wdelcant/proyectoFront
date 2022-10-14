// onclick bounce, move down

export function moveDown() {
  document.on('click', '.move-down', function () {
    let $this = $(this);
    let $parent = $this.parent();
    let $next = $parent.next();
    if ($next.length) {
      $parent.insertBefore($next);
    }
  });
}
