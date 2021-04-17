import React, {useState} from 'react';
import {Image, Pressable, FlatList} from 'react-native';
import {AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons';
import {Text, View} from '../../components/Themed';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';

import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailScreen = () => {
    const[currentSeason, setCurrentSeason] = useState(firstSeason)

    const seasonName = movie.seasons.items.map(season => season.name);
    return (
         <View>
            <Image style={styles.image} source={{uri: firstEpisode.poster }} />

            <FlatList
            data={currentSeason.episodes.items}
            renderItem={({ item }) => <EpisodeItem episode={item}/> }
            style={{marginBottom:250}}
            ListHeaderComponent= {(
                <View style={{padding:12}}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.match}>98% match</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                        <View style={styles.ageContainer}>
                            <Text style={styles.age}>12+</Text>
                        </View>
                        <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                        <MaterialIcons name="hd" size={24} color="white" />
                    </View>
                    {/* Play button */}
                    <Pressable onPress={()=>{console.warn('Play')}} style = {styles.playbutton}>
                        <Text style={styles.playbuttonText}>
                            <Entypo name="controller-play" size={16} color='black'/>
                            Play
                        </Text>
                    </Pressable>
                    {/* Download button */}
                    <Pressable onPress={()=>{console.warn('Play')}} style = {styles.downloadbutton}>
                        <Text style={styles.downloadbuttonText}>
                            <AntDesign name="download" size={16} color="white"  />
                            {' '}
                            Download
                        </Text>
                    </Pressable>
                    <Text style={{marginVertical: 10}}>{movie.plot}</Text>
                    <Text style={styles.year}>Cast:  {movie.cast}</Text>
                    <Text style={styles.year}>Creator:  {movie.creator}</Text>
    
                    {/* Row with icon buttons */}
                    <View style={{flexDirection: 'row', marginTop: 20,}}>
                        <View style={{alignItems: 'center', marginHorizontal:20}}>
                            <AntDesign name="plus" size={24} color="white"  />
                            <Text style={{color: 'darkgrey'}}>My List</Text>
                        </View>
    
                        <View style={{alignItems: 'center', marginHorizontal:20}}>
                            <Feather name="thumbs-up" size={24} color="white"  />
                            <Text style={{color: 'darkgrey'}}>Rate</Text>
                        </View>
    
                        <View style={{alignItems: 'center', marginHorizontal:20}}>
                            <FontAwesome name="send-o" size={24} color="white"  />
                            <Text style={{color: 'darkgrey'}}>Share</Text>
                        </View>
                    </View>

                    <Picker
                        selectedValue={currentSeason.name}
                        onValueChange={(itemValue, itemIndex) => {
                            setCurrentSeason(movie.seasons.items[itemIndex])
                        }} 
                        style={{color:'white', width:130}}
                        dropdownIconColor={'white'}
                     >
                            {seasonName.map(seasonName => (
                                <Picker.Item label={seasonName} value={seasonName} key={seasonName} color="white"/>
                            ))}
                    </Picker>
                </View>
            )}
            />
        </View>
    )
};

export default MovieDetailScreen;

