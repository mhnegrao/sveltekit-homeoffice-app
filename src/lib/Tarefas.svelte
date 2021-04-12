<script>
import { MaterialApp, Container,Row,Col, Alert,TextField } from "svelte-materialify";


</script>
<MaterialApp>
    <Container fluid>
        <Alert class="primary-color"><h5>Tarefas</h5></Alert>
        <Row>
            <TextField outlined>Descreva a tarefa</TextField>
        </Row>
    </Container>
</MaterialApp>

<style>
</style>
