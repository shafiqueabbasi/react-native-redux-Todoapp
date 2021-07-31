import * as React from 'react';
import { Text, View, StyleSheet, FlatList,TextInput,Button, TouchableOpacity } from 'react-native';


import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/action';

const TodoApp = ({ todo_list, addTodo, deleteTodo }) => {
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {

    if(task != ""){
      
      addTodo(task)
      setTask('')
    }else(alert("Do not empty Add Task"))
    // console.log(task, "is task me abhi kya he")

  }

  const handleDeleteTodo = (id) => {
    deleteTodo(id)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>ToDo App with React Native and Redux</Text>
          <Text>Add ToDo Here</Text>
          
          <TextInput
            style={{borderWidth: 1, borderRadius: 5, marginBottom: 10, color: 'black'}}
            label="Task"
            value={task}
            onChangeText={task => setTask(task)}
          />
          <Button title="Add Task" onPress={handleAddTodo}/>
            
      <FlatList
        data={todo_list}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={{flexDirection: 'row',justifyContent: 'space-between', marginTop: 10, paddingVertical: 10,paddingHorizontal: 15, borderWidth: 1,borderRadius: 5}}>
              <View style={{borderRadius: 25, marginVertical: 5}}>
                <Text>{item.task}</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}> 
                  <Text> X </Text>
                </TouchableOpacity>
              </View>
                
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 15,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todos.todo_list,
  }
}

const mapDispatchToProps = { addTodo, deleteTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
