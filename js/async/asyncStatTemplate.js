
function statsEventTable(stats){
    return `
    <table class="table table-responsive table-dark table-striped">
    <tr class="table-dark">
      <th colspan="3">Events Statistics</th>
    </tr>
  <tbody class="table-secondary table-striped">
    <tr>
      <th>Event with the highest percentage of attendance</th>
      <th>Event with the lowest percentage of attendance</th>
      <th>Event with larger capacity</th>
    </tr>
    <tr>
      <td>${}</td>
      <td>0</td>
      <td>0</td>
    </tr>
    </table>
    `
}
    function statsUpcomingEvents(stats){
    return`
    <table>
    <tr class="table-dark">
      <th colspan="3">Upcoming events statistics by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</th>
      <th>Percentage of attendance</th>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    `
    }
    function statsPastEvents(){
        return `
    
    <tr class="table-dark">
      <th colspan="3">Past events statistics by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</th>
      <th>Percentage of attendance</th>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
    
    `
}